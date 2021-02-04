class User < ApplicationRecord
  validates :username, presence: true, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true
  validates :password_digest, presence: true
  validates :session_token, presence: true, uniqueness: true



  def self.find_by_credentails(username, password)

  end

  def password=()
    @password = password
    
  end

  def is_password?(password)

  end

  def reset_session_token!

  end

  private

  def ensure_session_token

  end

end
