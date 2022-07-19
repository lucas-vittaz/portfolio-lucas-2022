class CreateContacts < ActiveRecord::Migration[6.1]
  def change
    create_table :contacts do |t|
      t.string :name
      t.string :email
      t.text :message
      t.string :nickname

      t.timestamps
    end
  end
end
