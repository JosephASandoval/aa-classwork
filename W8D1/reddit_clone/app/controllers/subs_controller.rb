class SubsController < ApplicationController
  before_action :require_login, except: [:show, :index]
  
  def new
    @sub = Sub.new
    render :new
  end

  def edit
    @sub = Sub.find_by(id: params[:id])
    render :edit
  end

  def update
    @sub = Sub.find_by(id: params[:id])
    if @sub && @sub.update(sub_params)
      redirect_to subs_url
    else
      flash.now[:errors] = @sub.errors.full_messages
      render :edit
    end
  end

  def create
    @sub = Sub.create(sub_params)
    if @sub.save
      redirect_to sub_url(@sub.id)
    else
      flash.now[:errors] = @sub.errors.full_messages
      render :new
    end
  end

  def show
    @sub = Sub.find_by(id: params[:id])
    render :show
  end

  def index
    @subs = Sub.all
    render :index
  end

  private
  def sub_params
    params.require(:sub).permit(:title, :description, :moderator_id)
  end
end
