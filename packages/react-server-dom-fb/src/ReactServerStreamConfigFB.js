/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

export type Destination = {
  buffer: string,
  done: boolean,
  fatal: boolean,
  error: mixed,
};

export opaque type PrecomputedChunk = string;
export opaque type Chunk = string;
export opaque type BinaryChunk = string;

export function scheduleWork(callback: () => void) {
  // We don't schedule work in this model, and instead expect performWork to always be called repeatedly.
}

export function flushBuffered(destination: Destination) {}

export const supportsRequestStorage = false;
export const requestStorage: AsyncLocalStorage<Request> = (null: any);

export function beginWriting(destination: Destination) {}

export function writeChunk(
  destination: Destination,
  chunk: Chunk | PrecomputedChunk | BinaryChunk,
): void {
  destination.buffer += chunk;
}

export function writeChunkAndReturn(
  destination: Destination,
  chunk: Chunk | PrecomputedChunk | BinaryChunk,
): boolean {
  destination.buffer += chunk;
  return true;
}

export function completeWriting(destination: Destination) {}

export function close(destination: Destination) {
  destination.done = true;
}

export function stringToChunk(content: string): Chunk {
  return content;
}

export function stringToPrecomputedChunk(content: string): PrecomputedChunk {
  return content;
}

export function typedArrayToBinaryChunk(
  content: $ArrayBufferView,
): BinaryChunk {
  throw new Error('Not implemented.');
}

export function clonePrecomputedChunk(
  chunk: PrecomputedChunk,
): PrecomputedChunk {
  return chunk;
}

export function byteLengthOfChunk(chunk: Chunk | PrecomputedChunk): number {
  throw new Error('Not implemented.');
}

export function byteLengthOfBinaryChunk(chunk: BinaryChunk): number {
  throw new Error('Not implemented.');
}

export function closeWithError(destination: Destination, error: mixed): void {
  destination.done = true;
  destination.fatal = true;
  destination.error = error;
}

export function createFastHash(input: string): string | number {
  return input;
}
