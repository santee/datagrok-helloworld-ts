/* Do not change these import lines. Datagrok will import API library in exactly the same manner */
import * as grok from 'datagrok-api/grok';
import * as ui from 'datagrok-api/ui';
import * as DG from "datagrok-api/dg";

import {} from "datagrok-api/grok";

export let _package = new DG.Package();

//name test
//input: string s
export function testTypescript() {
    grok.shell.info(`${_package.webRoot}`);
}