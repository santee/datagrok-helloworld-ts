import React from "react";

export const helloReact: React.FC<{name: string}> = ({name}) => <div>Hello {name}</div>