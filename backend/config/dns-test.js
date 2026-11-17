import dns from "node:dns";

dns.setServers(["8.8.8.8"]);

const hostname = "_mongodb._tcp.myauth.cljngln.mongodb.net";

async function testDNS() {
  try {
    console.log("Testing SRV...");
    const srv = await dns.promises.resolveSrv(hostname);
    console.log("SRV SUCCESS:", srv);

    console.log("Testing TXT...");
    const txt = await dns.promises.resolveTxt("myauth.cljngln.mongodb.net");
    console.log("TXT SUCCESS:", txt);
  } catch (error) {
    console.error("DNS ERROR:", error.code, error.message);
  }
}

testDNS();
