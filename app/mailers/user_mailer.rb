class UserMailer < ApplicationMailer
  def contact
    mail(to: 'lucasvittaz.pro@gmail.com', subject: 'test')
  end
end
