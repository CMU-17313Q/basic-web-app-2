export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("name")) {
    return ("test3");
  }

  return "I don't know";
}
