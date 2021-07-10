class Clock {
  constructor({ template }) {
    this.template = template;
  }
  render() {
    const format = x=>( x < 10 ? '0' : '' ) + x;
    const date = new Date();

    let hours = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();

    const output = this.template
      .replace( 'h', format( hours ) )
      .replace( 'm', format( mins ) )
      .replace( 's', format( secs ) );

    console.log( output );
  }

  stop() {
    clearInterval( this.timer );
  }

  start() {
    this.render();
    this.timer = setInterval( () => this.render(), 1000 );
  }
}
