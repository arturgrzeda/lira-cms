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
          html: '<h2>Dziękujemy za zgłoszenie</h2><p>Twoje zgłoszenie oczekuje na weryfikację, potwierdzenie weryfikacji otrzymasz w kolejnym mailu</p><p>Zespół, Miedzynarodowy Konkurs Pianistyczny Gabriela Weiss in Memoriam</p>',
        });
        console.log(data)
      } catch(err) {
          console.log(err);
      }
  },
  async afterUpdate(event) {
    const { result } = event;
    console.log(result)
    if (result.status === 'verified') {
      try{
        const data = await resend.emails.send({
          from: 'Miedzynarodowy Konkurs Pianistyczny Gabriela Weiss in Memoriam <onboarding@resend.dev>',
          to: [result.email],
          subject: 'Miedzynarodowy Konkurs Pianistyczny Gabriela Weiss in Memoriam',
          html: '<h2>Zgłoszenie przyjęte</h2><p>Twoje zgłoszenie zostało zewryfikowane i przyjęte, gratulacje.</p><p>Zespół, Miedzynarodowy Konkurs Pianistyczny Gabriela Weiss in Memoriam</p>',
        });
        console.log(data)
      } catch(err) {
          console.log(err);
      }
    }
  }
}
