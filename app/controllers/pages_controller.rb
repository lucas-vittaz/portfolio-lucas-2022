class PagesController < ApplicationController
  def home
  end

  def create
    ContactMailer.contact(contact).deliver_now

    flash[:info] = "Message envoyé"
    redirect_to root_path
  end
end
