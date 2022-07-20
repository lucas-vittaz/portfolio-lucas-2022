class ContactMailer < ApplicationMailer
  default from: 'lucasvittaz.pro@gmail.com'
  def contact
    @sender_email = params[:sender_email]
    @sender_name = params[:sender_name]
    @receiver_email = 'lucasvittaz.pro@gmail.com'
    @message = params[:message]

    mail(to: @receiver_email, subject: "Nouveau message")
  end
end
