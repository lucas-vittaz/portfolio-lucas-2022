class PagesController < ApplicationController
  def home
  end

  def create
    @sender_email = params[:email]
    @sender_name = params[:name]
    @receiver_email = 'lucasvittaz.pro@gmail.com'
    @message = params[:message]

    ContactMailer.with(receiver_email: @receiver_email, sender_email: @sender_email, name: @sender_name, message: @message).contact.deliver_now
    flash[:info] = "Your message has been successfully sent"
    redirect_to root_path
  end
end
