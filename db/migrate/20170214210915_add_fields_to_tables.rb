class AddFieldsToTables < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :name, :string
    add_reference :spots, :owner, references: :users
    add_column :entries, :user_id, :integer
    add_column :entries, :spot_id, :integer
  end
end
