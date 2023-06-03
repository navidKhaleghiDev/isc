import { Typography } from '@ui/atoms';
import { CodeLineSelect } from './CodeLineSelect';

export function CodeLine() {
  return (
    <div dir="ltr" className="mb-1 font-sans">
      <CodeLineSelect />
      <Typography
        type="span"
        color="neutral"
        size="body3"
        className="leading-none"
      >{`tcp $EXTERNAL_NET any -> $HOME_NET 111 (msg:"RPC portmap cachefsd request TCP"; flow:to_server,established; content:"|00 01 86 A0|"; depth:4; offset:16; content:"|00 00 00 03|"; within:4; distance:4; byte_jump:4,4,relative,align; byte_jump:4,4,relative,align; content:"|00 01 87 8B|"; within:4; content:"|00 00 00 00|"; depth:4; offset:8; reference:bugtraq,4674; reference:cve,2002-0033; reference:cve,2002-0084; classtype:rpc-portmap-decode; sid:1747; rev:11;) udp $EXTERNAL_NET any -> $HOME_NET 111 (msg:"RPC portmap rwalld request UDP"; content:"|00 01 86 A0|"; depth:4; offset:12; content:"|00 00 00 03|"; within:4; distance:4; byte_jump:4,4,relative,align; byte_jump:4,4,relative,align; content:"|00 01 86 A8|"; within:4; content:"|00 00 00 00|"; depth:4; offset:4; classtype:rpc-portmap-decode; sid:1732; rev:9;)`}</Typography>
    </div>
  );
}
