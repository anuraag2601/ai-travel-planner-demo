import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { TripBasics, UserPreferences, Itinerary } from '../types';

interface TravelPlannerState {
  tripBasics: TripBasics | null;
  preferences: UserPreferences | null;
  itinerary: Itinerary | null;
  currentStep: number;
}

type TravelPlannerAction =
  | { type: 'SET_TRIP_BASICS'; payload: TripBasics }
  | { type: 'SET_PREFERENCES'; payload: UserPreferences }
  | { type: 'SET_ITINERARY'; payload: Itinerary }
  | { type: 'SET_CURRENT_STEP'; payload: number }
  | { type: 'RESET' };

const initialState: TravelPlannerState = {
  tripBasics: null,
  preferences: null,
  itinerary: null,
  currentStep: 0,
};

const TravelPlannerContext = createContext<{
  state: TravelPlannerState;
  dispatch: React.Dispatch<TravelPlannerAction>;
} | null>(null);

function travelPlannerReducer(state: TravelPlannerState, action: TravelPlannerAction): TravelPlannerState {
  switch (action.type) {
    case 'SET_TRIP_BASICS':
      return { ...state, tripBasics: action.payload };
    case 'SET_PREFERENCES':
      return { ...state, preferences: action.payload };
    case 'SET_ITINERARY':
      return { ...state, itinerary: action.payload };
    case 'SET_CURRENT_STEP':
      return { ...state, currentStep: action.payload };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

export function TravelPlannerProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(travelPlannerReducer, initialState);

  return (
    <TravelPlannerContext.Provider value={{ state, dispatch }}>
      {children}
    </TravelPlannerContext.Provider>
  );
}

export function useTravelPlanner() {
  const context = useContext(TravelPlannerContext);
  if (!context) {
    throw new Error('useTravelPlanner must be used within a TravelPlannerProvider');
  }
  return context;
} 