import { atomWithStorage } from 'jotai/utils'

export const loginMethodAtom = atomWithStorage<string | null>(
    'loginMethod',
    null,
)
