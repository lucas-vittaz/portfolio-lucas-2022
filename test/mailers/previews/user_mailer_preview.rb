class UserMailerPreview < ActionMailer::Preview
  def contact
    user = 'lucasvittaz.pro@gmail.com'
    UserMailer.with(user: user).contact
  end
end
