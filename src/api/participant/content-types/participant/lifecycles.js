const { Resend } = require('resend');
const resend = new Resend('re_PrwxBzaM_Ks9b98rZDTspu1rF3NmhpE5C');

module.exports = {
  async afterCreate(event) {
      const { result } = event;
      console.log(result)

      try{
        const data = await resend.emails.send({
          from: 'Miedzynarodowy Konkurs Pianistyczny Gabriela Weiss in Memoriam <onboarding@resend.dev>',
          to: [result.email],
          subject: 'Miedzynarodowy Konkurs Pianistyczny Gabriela Weiss in Memoriam',
          html: '<h1>Miedzynarodowy Konkurs Pianistyczny Gabriela Weiss in Memoriam</h1>',
        });
        console.log(data)
      } catch(err) {
          console.log(err);
      }
  }
}
