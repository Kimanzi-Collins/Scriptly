import React from 'react'
import {useState, useEffect} from 'react'
import { useParams, useNavigate, Link } from 'react-router'
import api from '../lib/axios'
import toast from 'react-hot-toast'
import { ArrowLeftIcon, LoaderIcon, Trash2Icon, SaveIcon } from 'lucide-react'

const NoteDetailsPage = () => {
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const navigate = useNavigate()
  const { id } = useParams()

  const handleDelete = async () => {
    if (!window.confirm('Are you sure you want to delete this note?')) return;
    try {
      await api.delete(`/notes/${id}`);
      toast.success('Note deleted successfully');
      navigate('/')
    } catch (error) {
      toast.error('Failed to delete note');
    }
  }

  // Added the save handler for your new button
  const handleSave = async () => {
    setSaving(true);
    try {
      await api.put(`/notes/${id}`, {
        title: note.title,
        content: note.content
      });
      toast.success('Note updated successfully');
    } catch (error) {
      console.error("Error updating note:", error);
      toast.error('Failed to update note');
    } finally {
      setSaving(false);
    }
  }

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const response = await api.get(`/notes/${id}`);
        setNote(response.data);
      } catch (error) {
        console.log("Error fetching note:", error);
        toast.error('Failed to load note');
      } finally {
        setLoading(false);
      }
    }

    fetchNote();
  }, [id])

  if(loading) {
    return (
      <div className="min-h-screen bg-base-200 flex items-center justify-center">
        <LoaderIcon className='size-10 animate-spin' />
      </div>
    )
  }

  return(
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className='flex items-center justify-between mb-6'>
            <Link to="/" className='btn btn-ghost'>
              <ArrowLeftIcon className='h-5 w-5' />
              Back to Notes
            </Link>
            <button onClick={handleDelete} className='btn btn-error btn-outline'>
              <Trash2Icon className='h-5 w-5' />
              Delete Note
            </button>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              
              {/* Added flex flex-col and gap-2 to force the label above the input */}
              <div className="form-control flex flex-col gap-2 mb-4 w-full">
                <label className="label pb-0">
                  <span className="label-text font-medium">Title</span>
                </label>
                <input
                  type="text"
                  placeholder="Note Title"
                  className="input input-bordered w-full"
                  value={note.title} 
                  onChange={(e) => setNote({...note, title: e.target.value})}
                />
              </div>

              {/* Added flex flex-col and gap-2 to force the label above the textarea */}
              <div className="form-control flex flex-col gap-2 w-full">
                <label className="label pb-0">
                  <span className="label-text font-medium">Content</span>
                </label>
                <textarea
                  placeholder="Note Content"
                  className="textarea textarea-bordered h-48 w-full"
                  value={note.content} 
                  onChange={(e) => setNote({...note, content: e.target.value})}
                />
              </div>

              {/* Added the Save Changes button aligned to the bottom right */}
              <div className="card-actions justify-end mt-6">
                <button 
                  onClick={handleSave} 
                  disabled={saving}
                  className="btn btn-primary"
                >
                  {saving ? (
                    <LoaderIcon className="h-5 w-5 animate-spin" />
                  ) : (
                    <>
                      <SaveIcon className="h-5 w-5" />
                      Save Changes
                    </>
                  )}
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NoteDetailsPage