class PagesController < ApplicationController
  def home
  end

  def contact
    ContactMailer.contact(params[:name], params[:email], params[:message]).deliver_now

    flash[:info] = "Message envoyé"
    redirect_to root_path
  end
end
