import dns from "node:dns";

dns.setServers(["8.8.8.8", "1.1.1.1"]);

dns.resolveSrv(
  "_mongodb._tcp.myauth.cljngln.mongodb.net",
  (error, addresses) => {
    if (error) {
      console.error("DNS FAILED:", error.code, error.message);
    } else {
      console.log("DNS SUCCESS:", addresses);
    }
  },
);
