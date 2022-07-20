class ContactMailer < ApplicationMailer
  def contact(name, email, message)
    @user_name = name
    @user_email = email
    @user_message = message

    mail(to: 'lucasvittaz.pro@gmail.com', subject: "Nouveau message")
  end
end
