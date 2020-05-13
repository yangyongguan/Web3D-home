export default class MenuItem {
  name: string = ''
  menuIcon: string = ''
  link: string = ''
  constructor (name:string, menuIcon:string, link:string) {
    this.name = name
    this.menuIcon = menuIcon
    this.link = link
  }
}
