import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const templates = [
  { naam: "E101A", artikelen: ["L"], preview: "E101A.jpg" },
  { naam: "E102A", artikelen: ["XL"], preview: "E102A.jpg" },
  { naam: "E103A", artikelen: ["XXL"], preview: "E103A.jpg" },
  { naam: "E104N", artikelen: ["Mn"], preview: "E104N.jpg" },
  { naam: "E105N", artikelen: ["L"], preview: "E105N.jpg" },
  { naam: "E201A", artikelen: ["L", "Sn"], preview: "E201A.jpg" },
  { naam: "E202A", artikelen: ["Ml", "Mn"], preview: "E202A.jpg" },
  { naam: "E203D", artikelen: ["L", "XS"], preview: "E203D.jpg" },
  { naam: "E204A", artikelen: ["L", "Sn"], preview: "E204A.jpg" },
  { naam: "E204B", artikelen: ["L", "Sn"], preview: "E204B.jpg" },
  { naam: "E204C", artikelen: ["L", "Sn"], preview: "E204C.jpg" },
  { naam: "E204D", artikelen: ["L", "Sn"], preview: "E204D.jpg" },
  { naam: "E205I", artikelen: ["Mn", "L"], preview: "E205I.jpg" },
  { naam: "E205I variant 1", artikelen: ["Ml", "L"], preview: "E205I.jpg" },
  { naam: "E206A", artikelen: ["L", "Mn"], preview: "E206A.jpg" },
  { naam: "E206A variant 1", artikelen: ["L", "Ml"], preview: "E206A.jpg" },
  { naam: "E206E", artikelen: ["L", "Mn"], preview: "E206E.jpg" },
  { naam: "E206E variant 1", artikelen: ["L", "Ml"], preview: "E206E.jpg" },
  { naam: "E206G", artikelen: ["L", "Mn"], preview: "E206G.jpg" },
  { naam: "E206G variant 1", artikelen: ["L", "Ml"], preview: "E206G.jpg" },
  { naam: "E206H", artikelen: ["L", "Mn"], preview: "E206H.jpg" },
  { naam: "E206H variant 1", artikelen: ["L", "Ml"], preview: "E206H.jpg" },
  { naam: "E207K", artikelen: ["L", "Sn"], preview: "E207K.jpg" },
  { naam: "E301A", artikelen: ["L", "XS", "XS"], preview: "E301A.jpg" },
  { naam: "E302A", artikelen: ["Mn", "XS", "Sn"], preview: "E302A.jpg" },
  { naam: "E302A variant 1", artikelen: ["Ml", "XS", "Sn"], preview: "E302A.jpg" },
  { naam: "E302B", artikelen: ["Mn", "XS", "Sn"], preview: "E302B.jpg" },
  { naam: "E302B variant 1", artikelen: ["Ml", "XS", "Sn"], preview: "E302B.jpg" },
  { naam: "E302C", artikelen: ["Mn", "XS", "Sn"], preview: "E302C.jpg" },
  { naam: "E302C variant 1", artikelen: ["Ml", "XS", "Sn"], preview: "E302C.jpg" },
  { naam: "E303D", artikelen: ["Mn", "XS", "Sn"], preview: "E303D.jpg" },
  { naam: "E303D variant 1", artikelen: ["Ml", "XS", "Sn"], preview: "E303D.jpg" },
  { naam: "E304A", artikelen: ["Sn", "Sl", "Sn"], preview: "E304A.jpg" },
  { naam: "E304A variant 1", artikelen: ["Sl", "Sl", "Sn"], preview: "E304A.jpg" },
  { naam: "E304A variant 2", artikelen: ["Sn", "Sn", "Sn"], preview: "E304A.jpg" },
  { naam: "E304A variant 3", artikelen: ["Sl", "Sn", "Sn"], preview: "E304A.jpg" },
  { naam: "E304B", artikelen: ["Sn", "Sl", "Sn"], preview: "E304B.jpg" },
  { naam: "E304B variant 1", artikelen: ["Sl", "Sl", "Sn"], preview: "E304B.jpg" },
  { naam: "E304B variant 2", artikelen: ["Sn", "Sn", "Sn"], preview: "E304B.jpg" },
  { naam: "E304B variant 3", artikelen: ["Sl", "Sn", "Sn"], preview: "E304B.jpg" },
  { naam: "E304C", artikelen: ["Sn", "Sl", "Sn"], preview: "E304C.jpg" },
  { naam: "E304C variant 1", artikelen: ["Sl", "Sl", "Sn"], preview: "E304C.jpg" },
  { naam: "E304C variant 2", artikelen: ["Sn", "Sn", "Sn"], preview: "E304C.jpg" },
  { naam: "E304C variant 3", artikelen: ["Sl", "Sn", "Sn"], preview: "E304C.jpg" },
  { naam: "E304D", artikelen: ["Sn", "Sl", "Sn"], preview: "E304D.jpg" },
  { naam: "E304D variant 1", artikelen: ["Sl", "Sl", "Sn"], preview: "E304D.jpg" },
  { naam: "E304D variant 2", artikelen: ["Sn", "Sn", "Sn"], preview: "E304D.jpg" },
  { naam: "E304D variant 3", artikelen: ["Sl", "Sn", "Sn"], preview: "E304D.jpg" },
  { naam: "E305A", artikelen: ["L", "Mn", "XS"], preview: "E305A.jpg" },
  { naam: "E305A variant 1", artikelen: ["L", "Ml", "XS"], preview: "E305A.jpg" },
  { naam: "E306A", artikelen: ["L", "Sn", "XS"], preview: "E306A.jpg" },
  { naam: "E306A variant 1", artikelen: ["L", "Sl", "XS"], preview: "E306A.jpg" },
  { naam: "S101A", artikelen: ["XL"], preview: "S101A.jpg" },
  { naam: "S102A", artikelen: ["XXL"], preview: "S102A.jpg" },
  { naam: "S201F", artikelen: ["XL", "XS"], preview: "S201F.jpg" },
  { naam: "S202F", artikelen: ["XXL", "XS"], preview: "S202F.jpg" },
  { naam: "S203A", artikelen: ["XL", "Sn"], preview: "S203A.jpg" },
  { naam: "S203B", artikelen: ["XL", "Sn"], preview: "S203B.jpg" },
  { naam: "S203C", artikelen: ["XL", "Sn"], preview: "S203C.jpg" },
  { naam: "S203D", artikelen: ["XL", "Sn"], preview: "S203D.jpg" },
  { naam: "S204A", artikelen: ["XXL", "Sn"], preview: "S204A.jpg" },
  { naam: "S204B", artikelen: ["XXL", "Sn"], preview: "S204B.jpg" },
  { naam: "S204C", artikelen: ["XXL", "Sn"], preview: "S204C.jpg" },
  { naam: "S204D", artikelen: ["XXL", "Sn"], preview: "S204D.jpg" },
  { naam: "S205H", artikelen: ["XXL", "Sn"], preview: "S205H.jpg" },
  { naam: "S205H variant 1", artikelen: ["XXL", "Sl"], preview: "S205H.jpg" },
  { naam: "S205K", artikelen: ["XXL", "Sn"], preview: "S205K.jpg" },
  { naam: "S206A", artikelen: ["XXL", "Mn"], preview: "S206A.jpg" },
  { naam: "S206A variant 1", artikelen: ["XXL", "Ml"], preview: "S206A.jpg" },
  { naam: "S206E", artikelen: ["XXL", "Mn"], preview: "S206E.jpg" },
  { naam: "S206E variant 1", artikelen: ["XXL", "Ml"], preview: "S206E.jpg" },
  { naam: "S206G", artikelen: ["XXL", "Mn"], preview: "S206G.jpg" },
  { naam: "S206G variant 1", artikelen: ["XXL", "Ml"], preview: "S206G.jpg" },
  { naam: "S206H", artikelen: ["XXL", "Mn"], preview: "S206H.jpg" },
  { naam: "S206H variant 1", artikelen: ["XXL", "Ml"], preview: "S206H.jpg" },
  { naam: "S207A", artikelen: ["XXL", "L"], preview: "S207A.jpg" },
  { naam: "S208M", artikelen: ["XL", "Ml"], preview: "S208M.jpg" },
  { naam: "S209A", artikelen: ["XL", "L"], preview: "S209A.jpg" },
  { naam: "S209I", artikelen: ["XL", "L"], preview: "S209I.jpg" },
  { naam: "S301A", artikelen: ["XL", "XS", "XS"], preview: "S301A.jpg" },
  { naam: "S302A", artikelen: ["XXL", "XS", "XS"], preview: "S302A.jpg" },
  { naam: "S303A", artikelen: ["XXL", "Sn", "XS"], preview: "S303A.jpg" },
  { naam: "S303A variant 1", artikelen: ["XXL", "Sl", "XS"], preview: "S303A.jpg" },
  { naam: "S304A", artikelen: ["XXL", "Sn", "Sl"], preview: "S304A.jpg" },
  { naam: "S305A", artikelen: ["XXL", "Mn", "XS"], preview: "S305A.jpg" },
  { naam: "S305A variant 1", artikelen: ["XXL", "Ml", "XS"], preview: "S305A.jpg" },
  { naam: "S306A", artikelen: ["XL", "Sn", "Mn"], preview: "S306A.jpg" },
  { naam: "S306A variant 1", artikelen: ["XL", "Sl", "Mn"], preview: "S306A.jpg" },
  { naam: "S307A", artikelen: ["XL", "Mn", "Ml"], preview: "S307A.jpg" },
  { naam: "S307A variant 1", artikelen: ["XL", "Mn", "Ml"], preview: "S307A.jpg" },
  { naam: "S308F", artikelen: ["L", "Mn", "XS"], preview: "S308F.jpg" },
  { naam: "S308F variant 1", artikelen: ["L", "Ml", "XS"], preview: "S308F.jpg" },
  { naam: "S309A", artikelen: ["L", "Mn", "Sn"], preview: "S309A.jpg" },
  { naam: "S309A variant 1", artikelen: ["L", "Ml", "Sn"], preview: "S309A.jpg" },
  { naam: "S309B", artikelen: ["L", "Mn", "Sn"], preview: "S309B.jpg" },
  { naam: "S309B variant 1", artikelen: ["L", "Ml", "Sn"], preview: "S309B.jpg" },
  { naam: "S309C", artikelen: ["L", "Mn", "Sn"], preview: "S309C.jpg" },
  { naam: "S309C variant 1", artikelen: ["L", "Ml", "Sn"], preview: "S309C.jpg" },
  { naam: "S309D", artikelen: ["L", "Mn", "Sn"], preview: "S309D.jpg" },
  { naam: "S309D variant 1", artikelen: ["L", "Ml", "Sn"], preview: "S309D.jpg" },
  { naam: "S310F", artikelen: ["XXL", "Mn", "XS"], preview: "S310F.jpg" },
  { naam: "S310F variant 1", artikelen: ["XXL", "Ml", "XS"], preview: "S310F.jpg" },
  { naam: "S311A", artikelen: ["XXL", "Mn", "Sn"], preview: "S311A.jpg" },
  { naam: "S311A variant 1", artikelen: ["XXL", "Ml", "Sn"], preview: "S311A.jpg" },
  { naam: "S311B", artikelen: ["XXL", "Mn", "Sn"], preview: "S311B.jpg" },
  { naam: "S311B variant 1", artikelen: ["XXL", "Ml", "Sn"], preview: "S311B.jpg" },
  { naam: "S311C", artikelen: ["XXL", "Mn", "Sn"], preview: "S311C.jpg" },
  { naam: "S311C variant 1", artikelen: ["XXL", "Ml", "Sn"], preview: "S311C.jpg" },
  { naam: "S311D", artikelen: ["XXL", "Mn", "Sn"], preview: "S311D.jpg" },
  { naam: "S311D variant 1", artikelen: ["XXL", "Ml", "Sn"], preview: "S311D.jpg" },
  { naam: "S312H", artikelen: ["L", "Mn", "Mn"], preview: "S312H.jpg" },
  { naam: "S312H variant 1", artikelen: ["L", "Ml", "Mn"], preview: "S312H.jpg" },
  { naam: "S312H variant 2", artikelen: ["L", "Ml", "Ml"], preview: "S312H.jpg" },
  { naam: "S312H variant 3", artikelen: ["L", "Mn", "Ml"], preview: "S312H.jpg" },
  { naam: "S313H", artikelen: ["L", "L", "Mn"], preview: "S313H.jpg" },
  { naam: "S313H variant 1", artikelen: ["L", "L", "Ml"], preview: "S313H.jpg" },
  { naam: "S314K", artikelen: ["L", "Mn", "Sn"], preview: "S314K.jpg" },
  { naam: "S314K variant 1", artikelen: ["L", "Ml", "Sn"], preview: "S314K.jpg" },
  { naam: "S315K", artikelen: ["L", "L", "Sn"], preview: "S315K.jpg" },
  { naam: "S316A", artikelen: ["L", "L", "Mn"], preview: "S316A.jpg" },
  { naam: "S316A variant 1", artikelen: ["L", "L", "Ml"], preview: "S316A.jpg" },
  { naam: "S317J", artikelen: ["L", "Ml", "Mn"], preview: "S317J.jpg" },
  { naam: "S317L", artikelen: ["L", "Ml", "Mn"], preview: "S317L.jpg" },
  { naam: "S318L", artikelen: ["Ml", "Ml", "Mn"], preview: "S318L.jpg" },
  { naam: "S319N", artikelen: ["L", "L", "Mn"], preview: "S319N.jpg" },
  { naam: "S319N variant 1", artikelen: ["L", "L", "Ml"], preview: "S319N.jpg" },
  { naam: "S320I", artikelen: ["XL", "L", "Mn"], preview: "S320I.jpg" },
  { naam: "S320I variant 1", artikelen: ["XL", "L", "Ml"], preview: "S320I.jpg" },
  { naam: "S321M", artikelen: ["L", "L", "Mn"], preview: "S321M.jpg" },
  { naam: "S321M variant 1", artikelen: ["L", "L", "Ml"], preview: "S321M.jpg" },
  { naam: "S322M", artikelen: ["XL", "L", "Mn"], preview: "S322M.jpg" },
  { naam: "S322M variant 1", artikelen: ["XL", "L", "Ml"], preview: "S322M.jpg" },
  { naam: "S323E", artikelen: ["L", "L", "Mn"], preview: "S323E.jpg" },
  { naam: "S323E variant 1", artikelen: ["L", "L", "Ml"], preview: "S323E.jpg" },
  { naam: "S323G", artikelen: ["L", "L", "Mn"], preview: "S323G.jpg" },
  { naam: "S323G variant 1", artikelen: ["L", "L", "Ml"], preview: "S323G.jpg" },
  { naam: "S323H", artikelen: ["L", "L", "Mn"], preview: "S323H.jpg" },
  { naam: "S323H variant 1", artikelen: ["L", "L", "Ml"], preview: "S323H.jpg" },
  { naam: "S324E", artikelen: ["XL", "L", "Mn"], preview: "S324E.jpg" },
  { naam: "S324E variant 1", artikelen: ["XL", "L", "Ml"], preview: "S324E.jpg" },
  { naam: "S324G", artikelen: ["XL", "L", "Mn"], preview: "S324G.jpg" },
  { naam: "S324G variant 1", artikelen: ["XL", "L", "Ml"], preview: "S324G.jpg" },
  { naam: "S324H", artikelen: ["XL", "L", "Mn"], preview: "S324H.jpg" },
  { naam: "S324H variant 1", artikelen: ["XL", "L", "Ml"], preview: "S324H.jpg" },
  { naam: "S325K", artikelen: ["L", "L", "Sn"], preview: "S325K.jpg" },
  { naam: "S326K", artikelen: ["XL", "L", "Sn"], preview: "S326K.jpg" },
  { naam: "S327A", artikelen: ["L", "Mn", "L"], preview: "S327A.jpg" },
  { naam: "S327A variant 1", artikelen: ["L", "Ml", "L"], preview: "S327A.jpg" },
  { naam: "S328A", artikelen: ["XL", "Mn", "L"], preview: "S328A.jpg" },
  { naam: "S328A variant 1", artikelen: ["XL", "Ml", "L"], preview: "S328A.jpg" },
  { naam: "S329A", artikelen: ["XXL", "Mn", "L"], preview: "S329A.jpg" },
  { naam: "S329A variant 1", artikelen: ["XXL", "Ml", "L"], preview: "S329A.jpg" },
  { naam: "S330N", artikelen: ["L", "L", "Sn"], preview: "S330N.jpg" },
  { naam: "S401A", artikelen: ["L", "Mn", "XS", "XS"], preview: "S401A.jpg" },
  { naam: "S401A variant 1", artikelen: ["L", "Ml", "XS", "XS"], preview: "S401A.jpg" },
  { naam: "S402A", artikelen: ["XXL", "Mn", "XS", "XS"], preview: "S402A.jpg" },
  { naam: "S402A variant 1", artikelen: ["XXL", "Ml", "XS", "XS"], preview: "S402A.jpg" },
  { naam: "S403F", artikelen: ["L", "Mn", "XS", "XS"], preview: "S403F.jpg" },
  { naam: "S403F variant 1", artikelen: ["L", "Ml", "XS", "XS"], preview: "S403F.jpg" },
  { naam: "S404A", artikelen: ["L", "Mn", "Sn", "XS"], preview: "S404A.jpg" },
  { naam: "S404A variant 1", artikelen: ["L", "Ml", "Sn", "XS"], preview: "S404A.jpg" },
  { naam: "S404B", artikelen: ["L", "Mn", "Sn", "XS"], preview: "S404B.jpg" },
  { naam: "S404B variant 1", artikelen: ["L", "Ml", "Sn", "XS"], preview: "S404B.jpg" },
  { naam: "S404C", artikelen: ["L", "Mn", "Sn", "XS"], preview: "S404C.jpg" },
  { naam: "S404C variant 1", artikelen: ["L", "Ml", "Sn", "XS"], preview: "S404C.jpg" },
  { naam: "S404D", artikelen: ["L", "Mn", "Sn", "XS"], preview: "S404D.jpg" },
  { naam: "S404D variant 1", artikelen: ["L", "Ml", "Sn", "XS"], preview: "S404D.jpg" },
  { naam: "S405A", artikelen: ["XXL", "Mn", "Sn", "XS"], preview: "S405A.jpg" },
  { naam: "S405A variant 1", artikelen: ["XXL", "Ml", "Sn", "XS"], preview: "S405A.jpg" },
  { naam: "S405B", artikelen: ["XXL", "Mn", "Sn", "XS"], preview: "S405B.jpg" },
  { naam: "S405B variant 1", artikelen: ["XXL", "Ml", "Sn", "XS"], preview: "S405B.jpg" },
  { naam: "S405C", artikelen: ["XXL", "Mn", "Sn", "XS"], preview: "S405C.jpg" },
  { naam: "S405C variant 1", artikelen: ["XXL", "Ml", "Sn", "XS"], preview: "S405C.jpg" },
  { naam: "S405D", artikelen: ["XXL", "Mn", "Sn", "XS"], preview: "S405D.jpg" },
  { naam: "S405D variant 1", artikelen: ["XXL", "Ml", "Sn", "XS"], preview: "S405D.jpg" },
  { naam: "S406E", artikelen: ["L", "Mn", "Sl", "Sn"], preview: "S406E.jpg" },
  { naam: "S406E variant 1", artikelen: ["L", "Ml", "Sl", "Sn"], preview: "S406E.jpg" },
  { naam: "S406G", artikelen: ["L", "Mn", "Sl", "Sn"], preview: "S406G.jpg" },
  { naam: "S406G variant 1", artikelen: ["L", "Ml", "Sl", "Sn"], preview: "S406G.jpg" },
  { naam: "S406H", artikelen: ["L", "Mn", "Sl", "Sn"], preview: "S406H.jpg" },
  { naam: "S406H variant 1", artikelen: ["L", "Ml", "Sl", "Sn"], preview: "S406H.jpg" },
  { naam: "S407A", artikelen: ["L", "Mn", "Sl", "Sn"], preview: "S407A.jpg" },
  { naam: "S407A variant 1", artikelen: ["L", "Ml", "Sl", "Sn"], preview: "S407A.jpg" },
  { naam: "S408A", artikelen: ["L", "Mn", "Ml", "XS"], preview: "S408A.jpg" },
  { naam: "S408A variant 1", artikelen: ["L", "Ml", "Ml", "XS"], preview: "S408A.jpg" },
  { naam: "S408A variant 2", artikelen: ["L", "Mn", "Mn", "XS"], preview: "S408A.jpg" },
  { naam: "S408A variant 3", artikelen: ["L", "Ml", "Mn", "XS"], preview: "S408A.jpg" },
  { naam: "S409E", artikelen: ["L", "L", "Mn", "Sn"], preview: "S409E.jpg" },
  { naam: "S409E variant 1", artikelen: ["L", "L", "Ml", "Sn"], preview: "S409E.jpg" },
  { naam: "S409G", artikelen: ["L", "L", "Mn", "Sn"], preview: "S409G.jpg" },
  { naam: "S409G variant 1", artikelen: ["L", "L", "Ml", "Sn"], preview: "S409G.jpg" },
  { naam: "S410E", artikelen: ["L", "Ml", "Mn", "Mn"], preview: "S410E.jpg" },
  { naam: "S410E variant 1", artikelen: ["L", "Ml", "Mn", "Ml"], preview: "S410E.jpg" },
  { naam: "S410G", artikelen: ["L", "Ml", "Mn", "Mn"], preview: "S410G.jpg" },
  { naam: "S410G variant 1", artikelen: ["L", "Ml", "Mn", "Ml"], preview: "S410G.jpg" },
  { naam: "S410H", artikelen: ["L", "Ml", "Mn", "Mn"], preview: "S410H.jpg" },
  { naam: "S410H variant 1", artikelen: ["L", "Ml", "Mn", "Ml"], preview: "S410H.jpg" },
  { naam: "S411H", artikelen: ["L", "Ml", "Mn", "Sn"], preview: "S411H.jpg" },
  { naam: "S411H variant 1", artikelen: ["L", "Ml", "Ml", "Sn"], preview: "S411H.jpg" },
  { naam: "S412K", artikelen: ["L", "L", "Sn", "Sn"], preview: "S412K.jpg" },
  { naam: "S413K", artikelen: ["L", "Ml", "Mn", "Sn"], preview: "S413K.jpg" },
  { naam: "S414A", artikelen: ["L", "L", "Mn", "Sn"], preview: "S414A.jpg" },
  { naam: "S414A variant 1", artikelen: ["L", "L", "Ml", "Sn"], preview: "S414A.jpg" },
  { naam: "S414B", artikelen: ["L", "L", "Mn", "Sn"], preview: "S414B.jpg" },
  { naam: "S414B variant 1", artikelen: ["L", "L", "Ml", "Sn"], preview: "S414B.jpg" },
  { naam: "S414C", artikelen: ["L", "L", "Mn", "Sn"], preview: "S414C.jpg" },
  { naam: "S414C variant 1", artikelen: ["L", "L", "Ml", "Sn"], preview: "S414C.jpg" },
  { naam: "S414D", artikelen: ["L", "L", "Mn", "Sn"], preview: "S414D.jpg" },
  { naam: "S414D variant 1", artikelen: ["L", "L", "Ml", "Sn"], preview: "S414D.jpg" },
  { naam: "S415E", artikelen: ["L", "L", "Mn", "Sn"], preview: "S415E.jpg" },
  { naam: "S415E variant 1", artikelen: ["L", "L", "Ml", "Sn"], preview: "S415E.jpg" },
  { naam: "S415G", artikelen: ["L", "L", "Mn", "Sn"], preview: "S415G.jpg" },
  { naam: "S415G variant 1", artikelen: ["L", "L", "Ml", "Sn"], preview: "S415G.jpg" },
  { naam: "S415H", artikelen: ["L", "L", "Mn", "Sn"], preview: "S415H.jpg" },
  { naam: "S415H variant 1", artikelen: ["L", "L", "Ml", "Sn"], preview: "S415H.jpg" },
  { naam: "S416K", artikelen: ["L", "L", "Sn", "Sn"], preview: "S416K.jpg" },
  { naam: "S417M", artikelen: ["L", "L", "Mn", "Mn"], preview: "S417M.jpg" },
  { naam: "S417M variant 1", artikelen: ["L", "L", "Ml", "Mn"], preview: "S417M.jpg" },
  { naam: "S417M variant 2", artikelen: ["L", "L", "Mn", "Ml"], preview: "S417M.jpg" },
  { naam: "S417M variant 3", artikelen: ["L", "L", "Ml", "Ml"], preview: "S417M.jpg" },
  { naam: "S418M", artikelen: ["L", "L", "Mn", "Sn"], preview: "S418M.jpg" },
  { naam: "S418M variant 1", artikelen: ["L", "L", "Ml", "Sn"], preview: "S418M.jpg" },
  { naam: "S419M", artikelen: ["L", "Ml", "Mn", "Mn"], preview: "S419M.jpg" },
  { naam: "S419M variant 1", artikelen: ["L", "Ml", "Mn", "Ml"], preview: "S419M.jpg" },
  { naam: "S420J", artikelen: ["L", "L", "Mn", "XS"], preview: "S420J.jpg" },
  { naam: "S420J variant 1", artikelen: ["L", "L", "Ml", "XS"], preview: "S420J.jpg" },
  { naam: "S420N", artikelen: ["L", "L", "Mn", "XS"], preview: "S420N.jpg" },
  { naam: "S420N variant 1", artikelen: ["L", "L", "Ml", "XS"], preview: "S420N.jpg" },
  { naam: "S421J", artikelen: ["L", "L", "Sn", "XS"], preview: "S421J.jpg" },
  { naam: "S421J variant 1", artikelen: ["L", "L", "Sl", "XS"], preview: "S421J.jpg" },
  { naam: "S422L", artikelen: ["L", "Ml", "Mn", "XS"], preview: "S422L.jpg" },
  { naam: "S422L variant 1", artikelen: ["L", "Ml", "Ml", "XS"], preview: "S422L.jpg" },
  { naam: "S423L", artikelen: ["L", "L", "Sn", "XS"], preview: "S423L.jpg" },
  { naam: "S423L variant 1", artikelen: ["L", "L", "Sl", "XS"], preview: "S423L.jpg" },
  { naam: "S424N", artikelen: ["L", "Mn", "Sn", "XS"], preview: "S424N.jpg" },
  { naam: "S424N variant 1", artikelen: ["L", "Mn", "Sl", "XS"], preview: "S424N.jpg" },
  { naam: "S425A", artikelen: ["L", "L", "Mn", "XS"], preview: "S425A.jpg" },
  { naam: "S425A variant 1", artikelen: ["L", "L", "Ml", "XS"], preview: "S425A.jpg" },
  { naam: "S426A", artikelen: ["XL", "L", "Mn", "XS"], preview: "S426A.jpg" },
  { naam: "S426A variant 1", artikelen: ["XL", "L", "Ml", "XS"], preview: "S426A.jpg" },
  { naam: "S427A", artikelen: ["XL", "L", "XS", "XS"], preview: "S427A.jpg" },
  { naam: "S428A", artikelen: ["L", "L", "XS", "XS"], preview: "S428A.jpg" },
  { naam: "S429A", artikelen: ["XL", "Mn", "XS", "Sn"], preview: "S429A.jpg" },
  { naam: "S429A variant 1", artikelen: ["XL", "Ml", "XS", "Sn"], preview: "S429A.jpg" },
  { naam: "S429B", artikelen: ["XL", "Mn", "XS", "Sn"], preview: "S429B.jpg" },
  { naam: "S429B variant 1", artikelen: ["XL", "Ml", "XS", "Sn"], preview: "S429B.jpg" },
  { naam: "S429C", artikelen: ["XL", "Mn", "XS", "Sn"], preview: "S429C.jpg" },
  { naam: "S429C variant 1", artikelen: ["XL", "Ml", "XS", "Sn"], preview: "S429C.jpg" },
  { naam: "S429D", artikelen: ["XL", "Mn", "XS", "Sn"], preview: "S429D.jpg" },
  { naam: "S429D variant 1", artikelen: ["XL", "Ml", "XS", "Sn"], preview: "S429D.jpg" },
  { naam: "S430A", artikelen: ["XXL", "Mn", "XS", "Sn"], preview: "S430A.jpg" },
  { naam: "S430A variant 1", artikelen: ["XXL", "Ml", "XS", "Sn"], preview: "S430A.jpg" },
  { naam: "S430B", artikelen: ["XXL", "Mn", "XS", "Sn"], preview: "S430B.jpg" },
  { naam: "S430B variant 1", artikelen: ["XXL", "Ml", "XS", "Sn"], preview: "S430B.jpg" },
  { naam: "S430C", artikelen: ["XXL", "Mn", "XS", "Sn"], preview: "S430C.jpg" },
  { naam: "S430C variant 1", artikelen: ["XXL", "Ml", "XS", "Sn"], preview: "S430C.jpg" },
  { naam: "S430D", artikelen: ["XXL", "Mn", "XS", "Sn"], preview: "S430D.jpg" },
  { naam: "S430D variant 1", artikelen: ["XXL", "Ml", "XS", "Sn"], preview: "S430D.jpg" },
  { naam: "S431A", artikelen: ["L", "L", "Sn", "Sn"], preview: "S431A.jpg" },
  { naam: "S432A", artikelen: ["XXL", "L", "XS", "XS"], preview: "S432A.jpg" },
  { naam: "S501A", artikelen: ["L", "Mn", "Sl", "Sn", "XS"], preview: "S501A.jpg" },
  { naam: "S501A variant 1", artikelen: ["L", "Ml", "Sl", "Sn", "XS"], preview: "S501A.jpg" },
  { naam: "S502A", artikelen: ["L", "L", "Sn", "XS", "XS"], preview: "S502A.jpg" },
  { naam: "S502A variant 1", artikelen: ["L", "L", "Sn", "XS", "XS"], preview: "S502A.jpg" },
  { naam: "S503A", artikelen: ["L", "Ml", "Mn", "XS", "XS"], preview: "S503A.jpg" },
  { naam: "S504A", artikelen: ["L", "Ml", "Mn", "Sn", "XS"], preview: "S504A.jpg" },
  { naam: "S504A variant 1", artikelen: ["L", "Ml", "Mn", "Sl", "XS"], preview: "S504A.jpg" },
  { naam: "S505A", artikelen: ["L", "Ml", "Mn", "Sn", "XS"], preview: "S505A.jpg" },
  { naam: "S505A variant 1", artikelen: ["L", "Ml", "Ml", "Sn", "XS"], preview: "S505A.jpg" },
  { naam: "S506A", artikelen: ["L", "Mn", "Sn", "Sn", "Sn"], preview: "S506A.jpg" },
  { naam: "S506A variant 1", artikelen: ["L", "Mn", "Sl", "Sn", "Sn"], preview: "S506A.jpg" },
  { naam: "S506A variant 2", artikelen: ["L", "Mn", "Sn", "Sl", "Sn"], preview: "S506A.jpg" },
  { naam: "S506A variant 3", artikelen: ["L", "Mn", "Sl", "Sl", "Sn"], preview: "S506A.jpg" },
  { naam: "S506A variant 4", artikelen: ["L", "Ml", "Sn", "Sn", "Sn"], preview: "S506A.jpg" },
  { naam: "S506A variant 5", artikelen: ["L", "Ml", "Sl", "Sn", "Sn"], preview: "S506A.jpg" },
  { naam: "S506A variant 6", artikelen: ["L", "Ml", "Sn", "Sl", "Sn"], preview: "S506A.jpg" },
  { naam: "S506A variant 7", artikelen: ["L", "Ml", "Sl", "Sl", "Sn"], preview: "S506A.jpg" },
  { naam: "S506I", artikelen: ["L", "Mn", "Sn", "Sn", "Sn"], preview: "S506I.jpg" },
  { naam: "S506I variant 1", artikelen: ["L", "Mn", "Sl", "Sn", "Sn"], preview: "S506I.jpg" },
  { naam: "S506I variant 2", artikelen: ["L", "Mn", "Sn", "Sl", "Sn"], preview: "S506I.jpg" },
  { naam: "S506I variant 3", artikelen: ["L", "Mn", "Sl", "Sl", "Sn"], preview: "S506I.jpg" },
  { naam: "S506I variant 4", artikelen: ["L", "Ml", "Sn", "Sn", "Sn"], preview: "S506I.jpg" },
  { naam: "S506I variant 5", artikelen: ["L", "Ml", "Sl", "Sn", "Sn"], preview: "S506I.jpg" },
  { naam: "S506I variant 6", artikelen: ["L", "Ml", "Sn", "Sl", "Sn"], preview: "S506I.jpg" },
  { naam: "S506I variant 7", artikelen: ["L", "Ml", "Sl", "Sl", "Sn"], preview: "S506I.jpg" },
  { naam: "S507E", artikelen: ["L", "Mn", "Sn", "Sn", "Sn"], preview: "S507E.jpg" },
  { naam: "S507E variant 1", artikelen: ["L", "Mn", "Sn", "Sl", "Sn"], preview: "S507E.jpg" },
  { naam: "S507E variant 2", artikelen: ["L", "Mn", "Sl", "Sn", "Sn"], preview: "S507E.jpg" },
  { naam: "S507E variant 3", artikelen: ["L", "Mn", "Sl", "Sl", "Sn"], preview: "S507E.jpg" },
  { naam: "S507E variant 4", artikelen: ["L", "Ml", "Sn", "Sn", "Sn"], preview: "S507E.jpg" },
  { naam: "S507E variant 5", artikelen: ["L", "Ml", "Sn", "Sl", "Sn"], preview: "S507E.jpg" },
  { naam: "S507E variant 6", artikelen: ["L", "Ml", "Sl", "Sn", "Sn"], preview: "S507E.jpg" },
  { naam: "S507E variant 7", artikelen: ["L", "Ml", "Sl", "Sl", "Sn"], preview: "S507E.jpg" },
  { naam: "S507G", artikelen: ["L", "Mn", "Sn", "Sn", "Sn"], preview: "S507G.jpg" },
  { naam: "S507G variant 1", artikelen: ["L", "Mn", "Sl", "Sn", "Sn"], preview: "S507G.jpg" },
  { naam: "S507G variant 2", artikelen: ["L", "Mn", "Sn", "Sl", "Sn"], preview: "S507G.jpg" },
  { naam: "S507G variant 3", artikelen: ["L", "Mn", "Sl", "Sl", "Sn"], preview: "S507G.jpg" },
  { naam: "S507G variant 4", artikelen: ["L", "Ml", "Sn", "Sn", "Sn"], preview: "S507G.jpg" },
  { naam: "S507G variant 5", artikelen: ["L", "Ml", "Sl", "Sn", "Sn"], preview: "S507G.jpg" },
  { naam: "S507G variant 6", artikelen: ["L", "Ml", "Sn", "Sl", "Sn"], preview: "S507G.jpg" },
  { naam: "S507G variant 7", artikelen: ["L", "Ml", "Sl", "Sl", "Sn"], preview: "S507G.jpg" },
  { naam: "S507H", artikelen: ["L", "Mn", "Sn", "Sn", "Sn"], preview: "S507H.jpg" },
  { naam: "S507H variant 1", artikelen: ["L", "Mn", "Sl", "Sn", "Sn"], preview: "S507H.jpg" },
  { naam: "S507H variant 2", artikelen: ["L", "Mn", "Sn", "Sl", "Sn"], preview: "S507H.jpg" },
  { naam: "S507H variant 3", artikelen: ["L", "Mn", "Sl", "Sl", "Sn"], preview: "S507H.jpg" },
  { naam: "S507H variant 4", artikelen: ["L", "Ml", "Sn", "Sn", "Sn"], preview: "S507H.jpg" },
  { naam: "S507H variant 5", artikelen: ["L", "Ml", "Sl", "Sn", "Sn"], preview: "S507H.jpg" },
  { naam: "S507H variant 6", artikelen: ["L", "Ml", "Sn", "Sl", "Sn"], preview: "S507H.jpg" },
  { naam: "S507H variant 7", artikelen: ["L", "Ml", "Sl", "Sl", "Sn"], preview: "S507H.jpg" },
  { naam: "S508A", artikelen: ["L", "L", "Mn", "Sn", "XS"], preview: "S508A.jpg" },
  { naam: "S508A variant 1", artikelen: ["L", "L", "Ml", "Sn", "XS"], preview: "S508A.jpg" },
  { naam: "S509A", artikelen: ["L", "L", "Sn", "Sn", "XS"], preview: "S509A.jpg" },
  { naam: "S509A variant 1", artikelen: ["L", "L", "Sl", "Sn", "XS"], preview: "S509A.jpg" },
  { naam: "S510A", artikelen: ["L", "Mn", "Mn", "Sl", "Sn"], preview: "S510A.jpg" },
  { naam: "S510A variant 1", artikelen: ["L", "Ml", "Mn", "Sl", "Sn"], preview: "S510A.jpg" },
  { naam: "S510A variant 2", artikelen: ["L", "Mn", "Mn", "Sn", "Sn"], preview: "S510A.jpg" },
  { naam: "S510A variant 3", artikelen: ["L", "Ml", "Mn", "Sn", "Sn"], preview: "S510A.jpg" },
  { naam: "S511A", artikelen: ["L", "L", "Mn", "XS", "XS"], preview: "S511A.jpg" },
  { naam: "S511A variant 1", artikelen: ["L", "L", "Ml", "XS", "XS"], preview: "S511A.jpg" },
  { naam: "S511E", artikelen: ["L", "L", "Mn", "XS", "XS"], preview: "S511E.jpg" },
  { naam: "S511E variant 1", artikelen: ["L", "L", "Ml", "XS", "XS"], preview: "S511E.jpg" },
  { naam: "S511G", artikelen: ["L", "L", "Mn", "XS", "XS"], preview: "S511G.jpg" },
  { naam: "S511G variant 1", artikelen: ["L", "L", "Ml", "XS", "XS"], preview: "S511G.jpg" },
  { naam: "S511H", artikelen: ["L", "L", "Mn", "XS", "XS"], preview: "S511H.jpg" },
  { naam: "S511H variant 1", artikelen: ["L", "L", "Ml", "XS", "XS"], preview: "S511H.jpg" },
  { naam: "S512K", artikelen: ["L", "L", "Sn", "XS", "XS"], preview: "S512K.jpg" },
  { naam: "S513K", artikelen: ["L", "Sn", "Sn", "Sn", "Sn"], preview: "S513K.jpg" },
  { naam: "S513K variant 1", artikelen: ["L", "Sn", "Sl", "Sn", "Sn"], preview: "S513K.jpg" },
  { naam: "S513K variant 2", artikelen: ["L", "Sl", "Sn", "Sn", "Sn"], preview: "S513K.jpg" },
  { naam: "S513K variant 3", artikelen: ["L", "Sl", "Sl", "Sn", "Sn"], preview: "S513K.jpg" },
  { naam: "S514K", artikelen: ["L", "L", "Sn", "Sn", "XS"], preview: "S514K.jpg" },
  { naam: "S514K variant 1", artikelen: ["L", "L", "Sl", "Sn", "XS"], preview: "S514K.jpg" },
  { naam: "S515I", artikelen: ["L", "L", "Mn", "XS", "XS"], preview: "S515I.jpg" },
  { naam: "S515I variant 1", artikelen: ["L", "L", "Ml", "XS", "XS"], preview: "S515I.jpg" },
  { naam: "S516M", artikelen: ["L", "Ml", "Mn", "XS", "Sn"], preview: "S516M.jpg" },
  { naam: "S516M variant 1", artikelen: ["L", "Ml", "Ml", "XS", "Sn"], preview: "S516M.jpg" },
  { naam: "S516M variant 2", artikelen: ["L", "Mn", "Mn", "XS", "Sn"], preview: "S516M.jpg" },
  { naam: "S516M variant 3", artikelen: ["L", "Mn", "Ml", "XS", "Sn"], preview: "S516M.jpg" },
  { naam: "S517M", artikelen: ["L", "Mn", "Sn", "Sn", "Sn"], preview: "S517M.jpg" },
  { naam: "S517M variant 1", artikelen: ["L", "Mn", "Sl", "Sn", "Sn"], preview: "S517M.jpg" },
  { naam: "S517M variant 2", artikelen: ["L", "Mn", "Sl", "Sl", "Sn"], preview: "S517M.jpg" },
  { naam: "S517M variant 3", artikelen: ["L", "Mn", "Sn", "Sl", "Sn"], preview: "S517M.jpg" },
  { naam: "S517M variant 4", artikelen: ["L", "Ml", "Sn", "Sn", "Sn"], preview: "S517M.jpg" },
  { naam: "S517M variant 5", artikelen: ["L", "Ml", "Sl", "Sn", "Sn"], preview: "S517M.jpg" },
  { naam: "S517M variant 6", artikelen: ["L", "Ml", "Sl", "Sl", "Sn"], preview: "S517M.jpg" },
  { naam: "S517M variant 7", artikelen: ["L", "Ml", "Sn", "Sl", "Sn"], preview: "S517M.jpg" },

];

const formaten = ["XS", "Sn", "Sl", "Mn", "Ml", "L", "XL", "XXL"];
const formaatVolgorde = { XXL: 0, XL: 1, L: 2, Ml: 3, Mn: 4, Sl: 5, Sn: 6, XS: 7 };

export default function TemplateMatcher() {
  const [geselecteerd, setGeselecteerd] = useState({});
  const [aantalAdvertenties, setAantalAdvertenties] = useState(0);
  const [advertenties, setAdvertenties] = useState([]);

  const updateAantal = (formaat, aantal) => {
    setGeselecteerd((prev) => ({ ...prev, [formaat]: parseInt(aantal) || 0 }));
  };

  const updateAdvertentie = (index, veld, waarde) => {
    setAdvertenties((prev) => {
      const nieuw = [...prev];
      if (!nieuw[index]) nieuw[index] = {};
      nieuw[index][veld] = waarde;
      return nieuw;
    });
  };

  const matchesTemplate = (template) => {
    const kopie = [...template.artikelen];
    for (let formaat in geselecteerd) {
      let nodig = geselecteerd[formaat];
      while (nodig > 0) {
        const index = kopie.indexOf(formaat);
        if (index === -1) return false;
        kopie.splice(index, 1);
        nodig--;
      }
    }
    return true;
  };

  const visualiseerBlokjes = (template) => {
    const teller = {};
    for (let formaat of template.artikelen) {
      teller[formaat] = (teller[formaat] || 0) + 1;
    }
    const kopie = { ...geselecteerd };
    for (let formaat in kopie) {
      teller[formaat] = (teller[formaat] || 0) - kopie[formaat];
    }

    const blokjeObjecten = template.artikelen.map((formaat) => {
      const isIngevuld = (kopie[formaat] || 0) > 0;
      if (isIngevuld) kopie[formaat]--;
      return {
        formaat,
        kleur: isIngevuld ? "bg-green-500" : "bg-[#002f6c]"
      };
    });

    blokjeObjecten.sort((a, b) => formaatVolgorde[a.formaat] - formaatVolgorde[b.formaat]);

    return (
      <div className="mt-2 flex flex-wrap">
        {blokjeObjecten.map((blok, i) => (
          <span key={i} className={`inline-block px-2 py-1 m-0.5 ${blok.kleur} text-white rounded text-sm font-bold`}>
            {blok.formaat}
          </span>
        ))}
      </div>
    );
  };

  const mogelijkeTemplates = templates.filter((template) => {
    if (aantalAdvertenties === 3) return false;
    if (aantalAdvertenties > 0) {
      if (!template.advertentie) return false;
      if (aantalAdvertenties === 1 && advertenties.length === 1) {
        const adv = advertenties[0];
        const incompleet = [adv.kolommen, adv.vorm, adv.plek].some((v) => v === "");
        // if (incompleet) return !!template.advertentie;
        return (!adv.kolommen || adv.kolommen == template.advertentie.kolommen) &&
               (!adv.vorm || adv.vorm === template.advertentie.vorm) &&
               (!adv.plek || adv.plek === template.advertentie.plek) &&
               matchesTemplate(template);
      }
      return false;
    }
    return !template.advertentie && matchesTemplate(template);
  });

  return (
    <div className="p-6 space-y-6 text-[#002f6c] min-h-screen" style={{ backgroundImage: 'linear-gradient(to bottom right, #b3cce6, #e6edf5)' }}>
      <h1 className="text-2xl font-extrabold tracking-tight">Template-tool <span className="italic">The Perfect Match</span> <span className="text-sm font-normal align-top ml-2 bg-white/40 px-2 py-0.5 rounded">BETA</span></h1>

      <div className="bg-white/40 rounded-xl p-4">
  <h2 className="text-lg font-bold mb-4">📰 Artikelen</h2>
  <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-xl">
    {formaten.map((formaat) => (
      <div key={formaat} className="flex flex-col">
        <label htmlFor={formaat} className="text-sm font-semibold mb-1">
          <span className='font-bold'>{formaat}</span> <span className='font-normal'>({formaat === "XS" ? 1000 : formaat === "S" ? 1800 : formaat === "M" ? 2800 : formaat === "L" ? 4000 : formaat === "XL" ? 5400 : 7200} tekens)</span>
        </label>
        <Input
          id={formaat}
          type="number"
          min="0"
          className="border border-[#002f6c]"
          value={geselecteerd[formaat] || ""}
          onChange={(e) => updateAantal(formaat, e.target.value)}
        />
      </div>
    ))}
  </div>
</div>

<div className="bg-white/40 rounded-xl p-4">
  <h2 className="text-lg font-bold mb-4">📢 Advertenties</h2>
  <div className="mb-6">
        <label className="text-sm font-semibold mb-1 block">Aantal advertenties</label>
        <select
          className="border border-[#002f6c] rounded p-2"
          value={aantalAdvertenties}
          onChange={(e) => {
            const aantal = Number(e.target.value);
            setAantalAdvertenties(aantal);
            setAdvertenties([...Array(aantal)].map(() => ({ kolommen: "", vorm: "", plek: "" })));
          }}
        >
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
<option value="3">3</option>
        </select>

        {aantalAdvertenties <= 2 && [...Array(aantalAdvertenties)].map((_, index) => (
  <div key={index} className="flex flex-wrap gap-1 mt-2 items-end">
    <div className="flex flex-col mr-1">
      <label className="text-sm font-semibold mb-1 block">Advertentie {index + 1}: Aantal kolommen</label>
      <select className="border border-[#002f6c] w-36 p-1 rounded" value={advertenties[index]?.kolommen || ''} onChange={(e) => updateAdvertentie(index, 'kolommen', e.target.value)}>
        {[<option key="" value="">Selecteer</option>, ...[1, 2, 3, 4, 5].map(n => <option key={n} value={n}>{n}</option>)]}
      </select>
    </div>
    <div className="flex flex-col mr-1">
      <label className="text-sm font-semibold mb-1 block">Vorm</label>
      <select className="border border-[#002f6c] w-36 p-1 rounded" value={advertenties[index]?.vorm || ''} onChange={(e) => updateAdvertentie(index, 'vorm', e.target.value)}>
        <option value="">Selecteer</option>
        <option value="plat">plat</option>
        <option value="rechthoek liggend">rechthoek liggend</option>
        <option value="rechthoek staand">rechthoek staand</option>
        <option value="vierkant">vierkant</option>
      </select>
    </div>
    <div className="flex flex-col">
      <label className="text-sm font-semibold mb-1 block">Plek</label>
      <select className="border border-[#002f6c] w-36 p-1 rounded" value={advertenties[index]?.plek || ''} onChange={(e) => updateAdvertentie(index, 'plek', e.target.value)}>
        <option value="">Selecteer</option>
        <option value="linkerpagina">linkerpagina</option>
        <option value="rechterpagina">rechterpagina</option>
      </select>
    </div>
  </div>
))}

{aantalAdvertenties === 3 && (
  <p className="mt-4 text-sm text-[#002f6c] bg-white/50 p-2 rounded">
    Geen templates beschikbaar met drie of meer advertenties. Pagina moet handmatig door vormgever worden opgebouwd.
  </p>
)}
        </div>
</div>

      <h2 className="text-xl font-bold mt-8">Mogelijke templates:</h2>
      {mogelijkeTemplates.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mogelijkeTemplates.map((template) => (
            <Card key={template.naam} className="border border-[#002f6c]">
              <CardContent className="p-4">
                <p className="font-bold text-[#002f6c]">{template.naam}</p>
                {visualiseerBlokjes(template)}
                {template.preview && (
                  <img
                    src={template.preview}
                    alt={`Voorvertoning van ${template.naam}`}
                    className="mt-2 rounded border border-[#002f6c]"
                  />
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <p className="text-[#002f6c]">Geen passende templates gevonden.</p>
      )}
    </div>
  );
}
