import React, {
    createContext, useReducer, useContext, ReactNode,
} from 'react'
import { User } from '@/common/models/user'

export enum Actions {
    SET_USER
}

interface GlobalState {
    user?: User
}

interface GlobalPayload {
    user?: User
}

const initialState: GlobalState = { }

export interface Context {
    state: GlobalState;
    dispatch: React.Dispatch<{
      type: Actions;
      payload?: GlobalPayload;
    }>;
  }

export const GlobalContext = createContext<Context>({
    state: initialState,
    dispatch: () => {},
})

export const useGlobalContext = () => useContext<Context>(GlobalContext)

export default function GlobalProvider(props: { children: ReactNode }) {
    const reducer: React.Reducer<GlobalState, { type: Actions; payload?: Partial<GlobalPayload> }> = (state, action) => {
        const { type, payload } = action
        switch (type) {
        case Actions.SET_USER: {
            if (!payload || !payload.user) return state
            return { ...state, user: payload.user }
        }

        default: return state
        }
    }

    const [state, dispatch] = useReducer(
        reducer,
        initialState,
    )
    return (
        <GlobalContext.Provider value={{ state, dispatch }}>
            {props.children}
        </GlobalContext.Provider>
    )
}
