import { useEffect, useState } from "react";

export function useIp() {
    const [apip, setip] = useState([])
    useEffect(() => {
        function fetchIP() {
            fetch(`https://api.ipify.org?format=json
            `)
              .then((response) => response.json())
              .then((dataip) => setip(dataip.ip));
          }
          fetchIP();
    }, [])
  return (
    apip
  )
}