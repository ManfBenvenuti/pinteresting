class Pin < ActiveRecord::Base
	belongs_to :user

	has_attached_file :image, :styles => { 
					:large => '1000x1000>', 
					:medium => "300x300>", 
					:thumb => "100x100>" },             
					
					:storage => :s3,
          :bucket  => ENV['MY_BUCKET_NAME'],
          :s3_credentials => {
              :access_key_id => ENV['AWS_ACCESS_KEY_ID'],
              :secret_access_key => ENV['AWS_SECRET_ACCESS_KEY']
                },
          :s3_permissions => 'private',
          :url => ":s3_domain_url"
  
  # Necessario per paperclip 4.0 in poi
  validates_attachment_content_type :image, :content_type => /\Aimage/

end
