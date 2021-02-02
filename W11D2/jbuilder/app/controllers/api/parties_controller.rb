class Api::PartiesController < ApplicationController
  def index
    @parties = Party.all
    
    render :index
  end

  def show
    @party = Party.includes(guests: [:gifts]).find_by(id: params[:id])
    # Party.find_by(id: params[:id]) => query to get party
    # if you want guests' gifts, query on top of above query
    # Party.includes(guests: [:gifts]) -> guests for party, query for gifts on each guest
    #   reduce number of queries to backend

    # @party = Party.find_by(id: params[:id])
    render :show
  end
end
