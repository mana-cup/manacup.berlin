import React, { useCallback, useEffect, useMemo, useState } from "react";
import { GridLines, Dots, MovingLines } from "@arwes/react-bgs";
import { Animator } from "@arwes/react-animator";
import RowLink from "../common/RowLink";
import StyledWindow from "../common/StyledWindow";
import Nav from "../Nav";
import Home from "../Home";
import EventsList from "../EventsList";
import PlayersList from "../PlayersList";
import ArchetypeList from "../ArchetypeList";
import DecksList from "../DecksList";
import SingleDeck from "../SingleDeck";
import SinglePlayer from "../SinglePlayer";
import SingleEvent from "../SingleEvent";
import NextEvent from "../NextEvent";
import Link from "../common/Link";
import { decks, players, events, venues } from "../data";

import useStyles from "./App.styles";

import type { Data, Deck, DeckId, Player, EventId, EventObject } from "../data";

/**
 *
 * @param param parameter to set in the query string
 * @param slug value to set in the query string
 */
const setQueryParam = (param: string | null, slug: string | null = null) => {
  const { pathname } = window.location;

  const slugQuery = slug ? `&slug=${slug}` : "";
  const newQuery = param ? `?type=${param}${slugQuery}` : "";
  const newPath = `${pathname}${newQuery}`;

  window.history.pushState({ type: param, slug }, document.title, newPath);
};

/**
 * The main control app. Controls which view is visible as well as having the states and setters
 */
const App = (): JSX.Element => {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [activeDeck, setActiveDeck] = useState<Deck | null>(null);
  const [activeArchetype, setActiveArchetype] = useState<string | null>(null);
  const [activePlayer, setActivePlayer] = useState<Player | null>(null);
  const [activeEvent, setActiveEvent] = useState<EventObject | null>(null);

  const data: Data = useMemo(
    () => ({
      decks,
      players,
      events,
      venues
    }),
    [decks, players, events, venues]
  );

  const setModal = useCallback(
    (
      modalType: string | null,
      slug: string | null,
      popstateEvent?: boolean
    ) => {
      if (activeDeck !== null) {
        setActiveDeck(null);
      }
      if (activePlayer !== null) {
        setActivePlayer(null);
      }
      if (activeArchetype !== null) {
        setActiveArchetype(null);
      }
      if (activeEvent !== null) {
        setActiveEvent(null);
      }

      switch (modalType) {
        case "deck":
          setActiveDeck(decks[slug as DeckId]);
          if (!popstateEvent) {
            setQueryParam("deck", slug);
          }
          break;
        case "player":
          setActivePlayer(players[slug as string]);
          if (!popstateEvent) {
            setQueryParam("player", slug);
          }
          break;
        case "event":
          setActiveEvent(events[slug as EventId]);
          if (!popstateEvent) {
            setQueryParam("event", slug);
          }
          break;
        case "playerlist":
        case "eventlist":
          if (!popstateEvent) {
            setQueryParam(modalType);
          }
          break;
        case "deckslist":
          setActiveArchetype(slug);
          if (!popstateEvent) {
            setQueryParam("deckslist", slug);
          }
          break;
        default:
          if (!popstateEvent) {
            setQueryParam(null, null);
          }
      }

      setActiveModal(modalType);
    },
    [
      setActiveArchetype,
      setActiveDeck,
      setActivePlayer,
      setActiveEvent,
      activeDeck,
      activePlayer,
      activeArchetype,
      activeEvent
    ]
  );

  const classes = useStyles();

  /**
   * catches the browser navigation event and sets the slug
   */
  const onNavigate = useCallback(
    (e: PopStateEvent) => {
      const type = e.state?.type;
      const slug = e.state?.slug;

      if (type) {
        setModal(type, slug || null, true);
      } else {
        setModal(null, null, true);
      }
    },
    [setModal]
  );

  /**
   * on load, this takes query params, parses them, and sets appropriate states
   */
  useEffect(() => {
    const query: { [param: string]: string } = {};

    window.location.search
      .slice(1)
      .split("&")
      .forEach((q) => {
        const paramPair = q.split("=");
        const [key, value] = paramPair;
        query[key] = value;
      });

    onNavigate({ state: query } as PopStateEvent);

    window.addEventListener("popstate", onNavigate);

    return () => {
      window.removeEventListener("popstate", onNavigate);
    };
  }, []);

  const setSlugHome = useCallback(() => setModal(null, null), []);

  const nextEvents = Object.values(events).filter((e) => !e.finished);

  return (
    <>
      <div className={classes.backgroundWrapper}>
        <Animator duration={{ interval: 10 }}>
          <GridLines lineColor="hsla(180, 100%, 75%, 0.05)" distance={30} />
          <Dots color="hsla(180, 100%, 75%, 0.05)" distance={30} />
          <MovingLines
            lineColor="hsla(180, 100%, 75%, 0.07)"
            distance={30}
            sets={20}
          />
        </Animator>
      </div>
      <StyledWindow className={classes.titleWindow}>
        <div className={classes.homeLink}>
          <Link onClick={setSlugHome}>manacup.berlin</Link>
        </div>
      </StyledWindow>
      <Animator active>
        <Nav setModal={setModal} />
      </Animator>
      {nextEvents.length ? <NextEvent nextEvents={nextEvents} /> : null}
      {activeModal === null && <Home />}
      {activeModal === "eventlist" && (
        <EventsList setModal={setModal} events={events} />
      )}
      {activeModal === "deckslist" && activeArchetype && (
        <DecksList
          data={data}
          setModal={setModal}
          activeArchetype={activeArchetype}
        />
      )}
      {activeModal === "deckslist" && !activeArchetype && (
        <ArchetypeList setModal={setModal} data={data} />
      )}
      {activeModal === "playerlist" && (
        <PlayersList setModal={setModal} players={players} />
      )}
      {activeModal === "event" && (
        <SingleEvent
          data={data}
          setModal={setModal}
          activeEvent={activeEvent}
        />
      )}
      {activeModal === "deck" && (
        <SingleDeck data={data} setModal={setModal} activeDeck={activeDeck} />
      )}
      {activeModal === "player" && (
        <SinglePlayer
          data={data}
          setModal={setModal}
          activePlayer={activePlayer}
        />
      )}
    </>
  );
};

export default App;
