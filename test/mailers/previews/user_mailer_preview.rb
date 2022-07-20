class UserMailerPreview < ActionMailer::Preview
  def contact
    UserMailer.contact()
  end
end
