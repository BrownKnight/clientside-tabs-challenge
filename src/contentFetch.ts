export class ContentFetch {
  static async getMostRecentArticlesForSection(section: string) {
    return await fetch(
      "https://content.guardianapis.com/football?order-by=newest&api-key=test"
    ).then((res) => res.json())
  }
}
