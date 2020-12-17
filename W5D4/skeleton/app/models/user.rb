class User < ApplicationRecord
    has_many :enrollment,
        primary_key: :id,
        foreign_key: :student_id,
        class_name: :Enrollment
    

end
