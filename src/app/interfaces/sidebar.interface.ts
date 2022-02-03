export interface SidebarInterface  {
  title: string,
  items: [
    {
      id: number,
      titolo: string,
      children: [
        {
          id: string,
          titolo: string,
          link: string
        }
      ]
    }
  ]
}