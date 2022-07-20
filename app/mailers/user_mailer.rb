class ContactMailer < ApplicationMailer
  def contact(user_name, user_email, user_message)
    @user_name = user_name
    @user_email = user_email
    @user_message = user_message

    mail(to: user_name, subject: "Nouveau message")
  end
end
