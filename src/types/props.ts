import { ComponentChild } from "preact";

export type ChildNode = ComponentChild;
export type ChildrenNode = ChildNode | ChildNode[];

export type PropsWithChildren<P = {}> = { children: ChildrenNode } & P;
