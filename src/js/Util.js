export default class Util {
  constructor(name){
    this.name = name;
    this.callMyName();
  }
  callMyName(){
    alert(this.name);
  }
}