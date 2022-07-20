class UserMailer < ApplicationMailer
  def contact
    @user = params[:user] # Instance variable => available in view
    mail(to: 'lucasvittaz.pro@gmail.com', subject: 'new email')
    # This will render a view in `app/views/user_mailer`!
  end
end
