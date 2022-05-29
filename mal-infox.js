async function getApi(url) {
const respone = await fetch(url);
  const d = await respone.json();
  const a = d["data"];
  console.log(d)
  if (epsind == true) {
      const dx = a["aired"]["prop"];
  const frm = dx["from"]["day"]+"-"+dx["from"]["month"]+"-"+dx["from"]["year"];
  const to = dx["to"]["day"]+"-"+dx["to"]["month"]+"-"+dx["to"]["year"];
  const st = a["studios"].map(function(elem){return elem.name}).join(", ");
  const gn = a["genres"].map(function(elem){return elem.name}).join(", ");
  const sny = a["title_synonyms"].join(", ");
  }
  
$("#st").html(st);
$("#t").html(a.title);
$("#tj").html(a.title_japanese);
$("#e").html(a.episodes);
$("#s").html(a.status);
$("#syns").html(a.synopsis);
$("#ard-frm").html(frm+" to "+to);
$("#ty").html(a.type);
$("#sc").html(a.score);
$("#sea").html(a.season+" "+a.year).css("text-transform","capitalize");
$("#dr").html(a.duration);
$("#gn").html(gn);
$("#sny").html(sny);
$("#teng").html(a.title_english);


};
