/* Do not change these import lines. Datagrok will import API library in exactly the same manner */
import * as grok from 'datagrok-api/grok';
import * as ui from 'datagrok-api/ui';
import * as DG from "datagrok-api/dg";

import { helloReact } from './hello-react';
import React from "react";
import ReactDOM from "react-dom";

export const _package = new DG.Package();

//name: testTypescriptPanel
//tags: panel, widgets
//input: string smiles {semType: Molecule}
//output: widget result
export function testTypescriptPanel(smiles: string) {
    const r = React.createElement(helloReact, { name: smiles });
    return DG.Widget.react(r); //works
}

﻿﻿﻿//name testTypescript
//input: string name
export function testTypescript(name: string) {
    const r = React.createElement(helloReact, { name });

    let reactHost = ui.div();
    ReactDOM.render(r, reactHost); //works

    ui.dialog('React custom components')
        .add(reactHost)
        .show();
}