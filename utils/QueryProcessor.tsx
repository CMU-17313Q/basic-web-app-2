export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("name")) {
    return ("My name is efeoflus");
  }

  return "";
}
