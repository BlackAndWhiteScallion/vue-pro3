import { HeadlessState } from './state';
import * as cg from './types';
export declare function callUserFunction<T extends (...args: any[]) => void>(f: T | undefined, ...args: Parameters<T>): void;
export declare function toggleOrientation(state: HeadlessState): void;
export declare function reset(state: HeadlessState): void;
export declare function setPieces(state: HeadlessState, pieces: cg.PiecesDiff): void;
export declare function setCheck(state: HeadlessState, color: cg.Color | boolean): void;
export declare function unsetPremove(state: HeadlessState): void;
export declare function unsetPredrop(state: HeadlessState): void;
export declare function baseMove(state: HeadlessState, orig: cg.Key, dest: cg.Key): cg.Piece | boolean;
export declare function baseNewPiece(state: HeadlessState, piece: cg.Piece, key: cg.Key, force?: boolean): boolean;
export declare function userMove(state: HeadlessState, orig: cg.Key, dest: cg.Key): boolean;
export declare function dropNewPiece(state: HeadlessState, orig: cg.Key, dest: cg.Key, force?: boolean): void;
export declare function selectSquare(state: HeadlessState, key: cg.Key, force?: boolean): void;
export declare function setSelected(state: HeadlessState, key: cg.Key): void;
export declare function unselect(state: HeadlessState): void;
export declare function canMove(state: HeadlessState, orig: cg.Key, dest: cg.Key): boolean;
export declare function isDraggable(state: HeadlessState, orig: cg.Key): boolean;
export declare function playPremove(state: HeadlessState): boolean;
export declare function playPredrop(state: HeadlessState, validate: (drop: cg.Drop) => boolean): boolean;
export declare function cancelMove(state: HeadlessState): void;
export declare function stop(state: HeadlessState): void;
export declare function getKeyAtDomPos(pos: cg.NumberPair, asWhite: boolean, bounds: ClientRect): cg.Key | undefined;
export declare function getSnappedKeyAtDomPos(orig: cg.Key, pos: cg.NumberPair, asWhite: boolean, bounds: ClientRect): cg.Key | undefined;
export declare function whitePov(s: HeadlessState): boolean;
