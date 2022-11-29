(()=>{"use strict";document.querySelector("#submit").addEventListener("click",(async function(){try{const e=document.querySelector("#city").value,t=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e}&appid=2f4907111f7679621a12fd4616f08931`,{mode:"cors"}),n=await t.json(),o=[];o.push(n.name,n.main,n.weather),(e=>{const t=document.querySelector("#content");t.innerHTML="";const n=document.createElement("div"),o=document.createElement("h1");o.textContent=e[0];const c=document.createElement("h2");c.textContent=Math.round(e[1].temp-273,2)+"° C";const a=document.createElement("span");a.textContent=`Feels like: ${Math.round(e[1].feels_like-273,2)}° C`;const r=document.createElement("h2");r.textContent=e[2][0].main,n.append(o,r,c,a),t.append(n)})(o),console.log(o)}catch(e){console.log(e)}}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoibUJBR0FBLFNBQVNDLGNBQWMsV0FBV0MsaUJBQWlCLFNDQW5EQyxpQkFDRSxJQUNFLE1BQU1DLEVBQVdKLFNBQVNDLGNBQWMsU0FBU0ksTUFDM0NDLFFBQWlCQyxNQUNyQixxREFBcURILDJDQUNyRCxDQUFFSSxLQUFNLFNBRUpDLFFBQWFILEVBQVNJLE9BQ3RCQyxFQUFVLEdBQ2hCQSxFQUFRQyxLQUFLSCxFQUFLSSxLQUFNSixFQUFLSyxLQUFNTCxFQUFLRSxTQ1poQyxDQUFDSSxJQUNYLE1BQU1DLEVBQU9oQixTQUFTQyxjQUFjLFlBQ3BDZSxFQUFLQyxVQUFZLEdBQ2pCLE1BQU1DLEVBQU9sQixTQUFTbUIsY0FBYyxPQUM5Qk4sRUFBT2IsU0FBU21CLGNBQWMsTUFDcENOLEVBQUtPLFlBQWNMLEVBQUksR0FDdkIsTUFBTU0sRUFBY3JCLFNBQVNtQixjQUFjLE1BQzNDRSxFQUFZRCxZQUFjRSxLQUFLQyxNQUFNUixFQUFJLEdBQUdTLEtBQU8sSUFBSyxHQUFLLE1BQzdELE1BQU1DLEVBQWF6QixTQUFTbUIsY0FBYyxRQUMxQ00sRUFBV0wsWUFBYyxlQUFlRSxLQUFLQyxNQUMzQ1IsRUFBSSxHQUFHVSxXQUFhLElBQ3BCLFFBRUYsTUFBTUMsRUFBYzFCLFNBQVNtQixjQUFjLE1BQzNDTyxFQUFZTixZQUFjTCxFQUFJLEdBQUcsR0FBR0QsS0FDcENJLEVBQUtTLE9BQU9kLEVBQU1hLEVBQWFMLEVBQWFJLEdBQzVDVCxFQUFLVyxPQUFPVCxFQUFLLEVESGZVLENBQUlqQixHQUNKa0IsUUFBUUMsSUFBSW5CLEVBR2QsQ0FGRSxNQUFPb0IsR0FDUEYsUUFBUUMsSUFBSUMsRUFDZCxDQUNGLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9mZXRjaC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9ET00uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0RGF0YSB9IGZyb20gXCIuL2ZldGNoLmpzXCI7IFxyXG5cclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3VibWl0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBnZXREYXRhKTsiLCJpbXBvcnQgeyBET00gfSBmcm9tIFwiLi9ET01cIjtcclxuXHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXREYXRhKCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2l0eVwiKS52YWx1ZTtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7bG9jYXRpb259JmFwcGlkPTJmNDkwNzExMWY3Njc5NjIxYTEyZmQ0NjE2ZjA4OTMxYCxcclxuICAgICAgeyBtb2RlOiBcImNvcnNcIiB9XHJcbiAgICApO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIGNvbnN0IHdlYXRoZXIgPSBbXTtcclxuICAgIHdlYXRoZXIucHVzaChkYXRhLm5hbWUsIGRhdGEubWFpbiwgZGF0YS53ZWF0aGVyKTtcclxuICAgIERPTSh3ZWF0aGVyKTtcclxuICAgIGNvbnNvbGUubG9nKHdlYXRoZXIpO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5sb2coZXJyKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IGdldERhdGEgfTtcclxuIiwiY29uc3QgRE9NID0gKGFycikgPT4ge1xyXG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcbiAgYm9keS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gIGNvbnN0IGNvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgbmFtZS50ZXh0Q29udGVudCA9IGFyclswXTtcclxuICBjb25zdCB0ZW1wZXJhdHVyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICB0ZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IE1hdGgucm91bmQoYXJyWzFdLnRlbXAgLSAyNzMsIDIpICsgXCJcXHUwMEIwIENcIjtcclxuICBjb25zdCBmZWVsc19saWtlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgZmVlbHNfbGlrZS50ZXh0Q29udGVudCA9IGBGZWVscyBsaWtlOiAke01hdGgucm91bmQoXHJcbiAgICBhcnJbMV0uZmVlbHNfbGlrZSAtIDI3MyxcclxuICAgIDJcclxuICApfVxcdTAwQjAgQ2A7XHJcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBhcnJbMl1bMF0ubWFpbjtcclxuICBjb250LmFwcGVuZChuYW1lLCBkZXNjcmlwdGlvbiwgdGVtcGVyYXR1cmUsIGZlZWxzX2xpa2UpO1xyXG4gIGJvZHkuYXBwZW5kKGNvbnQpO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgRE9NIH07XHJcbiJdLCJuYW1lcyI6WyJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwiYXN5bmMiLCJsb2NhdGlvbiIsInZhbHVlIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1vZGUiLCJkYXRhIiwianNvbiIsIndlYXRoZXIiLCJwdXNoIiwibmFtZSIsIm1haW4iLCJhcnIiLCJib2R5IiwiaW5uZXJIVE1MIiwiY29udCIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsInRlbXBlcmF0dXJlIiwiTWF0aCIsInJvdW5kIiwidGVtcCIsImZlZWxzX2xpa2UiLCJkZXNjcmlwdGlvbiIsImFwcGVuZCIsIkRPTSIsImNvbnNvbGUiLCJsb2ciLCJlcnIiXSwic291cmNlUm9vdCI6IiJ9