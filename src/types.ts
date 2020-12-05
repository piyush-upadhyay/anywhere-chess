export enum Color {
    BLACK = "BLACK",
    WHITE = "WHITE"
}

export enum Mode {
    OFFLINE = "Offline",
    ONLINE = "Online"
}

export enum Players {
    PLAYER1,
    PLAYER2
}

export enum PlayerColor {
    PLAYER1 = Color.BLACK,
    PLAYER2 = Color.WHITE
}

export enum BoardStates {
    IDLE,
    ACTION
}

export type Position = [Number, Number]

export enum ColorSuffix {
    BLACK = "b",
    WHITE = "w"
}