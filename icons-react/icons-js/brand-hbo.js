import * as React from "react";

function IconBrandHbo({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-hbo" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M2 16v-8" /><path d="M6 8v8" /><path d="M2 12h4" /><path d="M9 16h2a2 2 0 1 0 0 -4h-2h2a2 2 0 1 0 0 -4h-2v8z" /><path d="M19 8a4 4 0 1 1 0 8a4 4 0 0 1 0 -8z" /><circle cx={19} cy={12} r={1} /></svg>;
}

export default IconBrandHbo;