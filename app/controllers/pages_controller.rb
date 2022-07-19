class PagesController < ApplicationController
  def home
    @contact = Contact.all
  end
end
