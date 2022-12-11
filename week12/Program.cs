/*using System.Net.Sockets;

namespace Pretpark
{
    class Program
    {
        static void Main(string[] args)
        {
            var Boekingen = new List<(DateOnly dag, int aantal, string email)>();
            int[] aantalenPerDag = new int[31];
            TcpListener server = new TcpListener(new System.Net.IPAddress(new byte[] { 127, 0, 0, 1 }), 5000);
            server.Start();
            while (true)
            {
                using Socket connectie = server.AcceptSocket();
                using Stream request = new NetworkStream(connectie);
                using StreamReader requestLezer = new StreamReader(request);
                string[]? regel1 = requestLezer.ReadLine()?.Split(" ");
                if (regel1 == null) continue;
                (string methode, string url, string httpversie) = (regel1[0], regel1[1], regel1[2]);
                string? regel = requestLezer.ReadLine();
                int contentLength = 0;
                while (!string.IsNullOrEmpty(regel) && !requestLezer.EndOfStream)
                {
                    string[] stukjes = regel.Split(":");
                    (string header, string waarde) = (stukjes[0], stukjes[1]);
                    if (header.ToLower() == "content-length")
                        contentLength = int.Parse(waarde);
                    regel = requestLezer.ReadLine();
                }
                if (contentLength > 0)
                {
                    char[] bytes = new char[(int)contentLength];
                    requestLezer.Read(bytes, 0, (int)contentLength);
                }
                url = url.Trim('/');
                string? file = null;
                string Status = "200 OK";
                string? content = null;

                if (url == "")
                    file = "index.html";
                else if (url == "boek")
                    file = "boek.html";
                else if (url.StartsWith("doeboeking"))
                {
                    var query = url.Split("?")[1].Split("&");
                    int? aantal = null;
                    DateOnly? dag = null;
                    string? email = null;
                    try
                    {
                        foreach (string q in query)
                        {
                            var sleutel = q.Split("=")[0];
                            var waarde = q.Split("=")[1];
                            if (sleutel == "aantal") aantal = int.Parse(waarde);
                            if (sleutel == "dag") dag = DateOnly.Parse(waarde.Replace("%2F", "/"));
                            if (sleutel == "email")
                            {
                                if (waarde.Contains("%40")) email = waarde.Replace("%40", "@");
                                else
                                {
                                    content = "Geen geldig Email adres.";
                                    connectie.Send(System.Text.Encoding.ASCII.GetBytes("HTTP/1.0 " + "400 Bad Request" + "\r\nContent-Type: text/html\r\nContent-Length: " + content.Length + "\r\n\r\n" + content));
                                }
                            }
                        }
                        if (aantal == null || dag == null || email == null)
                        {
                            content = "foutieve invoer, probeer opnieuw.";
                            connectie.Send(System.Text.Encoding.ASCII.GetBytes("HTTP/1.0 " + "400 Bad Request" + "\r\nContent-Type: text/html\r\nContent-Length: " + content.Length + "\r\n\r\n" + content));
                        }
                    }
                    catch
                    {

                    }
                    Boekingen.Add((dag!.Value, aantal!.Value, email!));

                    aantalenPerDag[dag.Value.Day] += aantal.Value;
                    if (aantalenPerDag[dag.Value.Day] > 10)
                    {
                        file = "boek.html";
                        content = "Dag is al vol. Kies een Andere Dag.";

                    }
                    content = "Boeking gelukt! Klik niet op F5, want dan wordt de boeking opnieuw gedaan. ";
                }
                if (file != null)
                {
                    string dagen = "";
                    foreach (var (aantal, dag) in aantalenPerDag.Select((aantal, dag) => (aantal, dag)))
                    {
                        if (aantal >= 10)
                        {
                            if (dag < 10)
                            {
                                dagen += $"\"2022-12-0{dag}\", ";
                            }
                            else
                            {
                                dagen += $"\"2022-12-{dag}\", ";
                            }
                        }

                    }
                    string totaledata = $"[\"2022-11-29\", \"2022-11-30\", {dagen} \"2023-01-01\"]";

                    content += File.ReadAllText(file).Replace("dagenarray", totaledata);
                }
                if (content == null)
                    connectie.Send(System.Text.Encoding.ASCII.GetBytes("HTTP/1.0 404 Not Found\r\nContent-Type: text/html\r\nContent-Length: 0\r\n\r\n"));
                else
                    connectie.Send(System.Text.Encoding.ASCII.GetBytes("HTTP/1.0 " + Status + "\r\nContent-Type: text/html\r\nContent-Length: " + content.Length + "\r\n\r\n" + content));
            }
        }
    }
}/*