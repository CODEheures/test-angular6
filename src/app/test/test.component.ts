import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core'

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  private msg = {
    lock: 'Lock all',
    unlock: 'Unlock All'
  }

  constructor() { }

  @Input() public parentData
  @Output() public childMessage = new EventEmitter()

  public bindingWord: string

  public isDanger = false
  public btnMessage: string

  public personnal = {
    'text-success': !this.isDanger,
    'text-error': this.isDanger
  }

  public twoWayBindingValue = ''

  public isHide = false
  public isHidden = false

  public color = 'orange'

  public friends = ['marie', 'tof', 'yannick', 'daz']

  ngOnInit() {
    this.bindingWord = 'hello'
    this.btnMessage = this.msg.lock
  }

  btnClick () {
    // Invert danger
    this.isDanger = !this.isDanger

    // Invert btn message
    this.btnMessage = this.isDanger ? this.msg.unlock : this.msg.lock

    // Invert color
    this.personnal = {
      'text-success': !this.isDanger,
      'text-error': this.isDanger
    }

    // Add or remove Italic (for test)
    if (this.isDanger) {
      const newClassList = Object.assign({}, this.personnal, {'text-italic': true})
      this.personnal = newClassList
    } else {
      if ('text-italic' in this.personnal) { delete this.personnal['text-italic'] }
    }
  }

  hideText() {
    this.isHide = true
  }

  hideText2() {
    this.isHidden = true
  }

  sendResponse() {
    this.childMessage.emit('bonjour app module!')
  }

}
