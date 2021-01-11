class PostsController < ApplicationController
  before_action :require_login, except: [:show, :index]
  
  def new
    @post = Post.new
    render :new
  end

  def edit
    @post = Post.find_by(id: params[:id])
    render :edit
  end

  def update
    @post = Post.find_by(id: params[:id])
    if @post && @post.update(post_params)
      redirect_to posts_url
    else
      flash.now[:errors] = @post.errors.full_messages
      render :edit
    end
  end

  def create
    @post = Post.create(post_params)
    if @post.save
      redirect_to post_url(@post.id)
    else
      flash.now[:errors] = @post.errors.full_messages
      render :new
    end
  end

  def show
    @post = Post.find_by(id: params[:id])
    render :show
  end

  def destroy
    @post = Post.find_by(id: params[:id])
    @post.destroy
    redirect_to users_url
  end

  private

  def post_params
    params.require(:post).permit(:title, :url, :sub_id, :author_id, :content)
  end
end
