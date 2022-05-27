let temp = "https://api.jikan.moe/v4/anime/";
let api = temp + code;
async function getApi(url) {
  const respone = await fetch(url);
  const d = await respone.json();
  const a = d["data"];
  const dx = a["aired"]["prop"]
  const frm = dx["from"]["day"]+"-"+dx["from"]["month"]+"-"+dx["from"]["year"];
  const to = dx["to"]["day"]+"-"+dx["to"]["month"]+"-"+dx["to"]["year"];

  $("#t").html(a.title);
  $("#tj").html(a.title_japanese);
  $("#e").html(a.episodes);
  $("#s").html(a.status);
  $("#syns").html(a.synopsis);
  $("#ard-frm").html(frm+" to "+to);
}
getApi(api);
