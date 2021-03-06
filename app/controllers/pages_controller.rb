class PagesController < ApplicationController
  def home
  end

  def create
    @sender_email = params[:email]
    @sender_name = params[:name]
    @receiver_email = 'lucasvittaz.pro@gmail.com'
    @message = params[:message]

    ContactMailer.with(receiver_email: @receiver_email, sender_email: @sender_email, sender_name: @sender_name, message: @message).contact.deliver_now
    redirect_to root_path, flash: {success: "Thank you for your message! We'll get contact you soon!"}
  end

  def download
    send_file(
      "#{Rails.root}/public/lucas_vittaz_developpeur_2022.pdf",
      filename: "lucas_vittaz_developpeur_2022.pdf",
      type: "application/pdf"
    )
  end
end
