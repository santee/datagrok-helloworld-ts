/* Do not change these import lines. Datagrok will import API library in exactly the same manner */
import * as grok from 'datagrok-api/grok';
import * as ui from 'datagrok-api/ui';
import * as DG from "datagrok-api/dg";

import { helloReact } from './hello-react';
import React from "react";
import ReactDOM from "react-dom";

export function testTypescriptPanel(smiles: string) {
    const r = React.createElement(helloReact);
    return DG.Widget.react(r); //works
}

export function testTypescript(s: string) {
    const r = React.createElement(helloReact);

    let reactHost = ui.div();
    ReactDOM.render(r, reactHost); //works

    ui.dialog('React custom components')
        .add(reactHost)
        .show();
}

/*
//name testTypescript1
//input: string s
export function testTypescript1(s: string) {

    const r = React.createElement(helloReact);
    const widget = DG.Widget.react(r); // fails
}*/